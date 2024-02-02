import React, { useState, useEffect } from 'react';
import { DataTable, Searchbar, Menu, Divider,Button, Provider as PaperProvider } from 'react-native-paper';
import { TouchableOpacity, SafeAreaView, View, Text, StyleSheet } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { MaterialIcons } from '@expo/vector-icons';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../configFirebase/firebaseConfig';



//import data from "../MOCK_DATA.json";

class paymentData{
   constructor(id, status, email, amount) {
    this.id = id;
    this.status = status;
    this.email = email;
    this.amount = amount;
   }

   toString(){
    return this.id + ', ' + this.status + ', ' + this.email + ', ' + this.amount;
   }
}






const PagosTable = () => {
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([13, 17, 19]);
  const [itemsPerPage, setItemsPerPage] = useState(numberOfItemsPerPageList[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedText, setCopiedText] = useState('');
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [payments, setPayments] = useState([]); // Agrega el estado payments


  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);


  const [userInfo, setUserInfo] = useState(null);

  const fechData = async() => {
    const docRef = doc(db, "payments", "0ubEQ7MYmsKIC1C7rWo8");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    setUserInfo(docSnap.data())
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  
  }
  };
  ///////////////////////////////////////

    const getAllData = async() =>{
    const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
      setUserInfo(doc.data());
});
  }
  

////////////////////////////////////////

  const fetchPayments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'payments'));
      const paymentsData = [];
      querySnapshot.forEach((doc) => {
        paymentsData.push({ id: doc.id, ...doc.data() });
      });
      setPayments(paymentsData);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  useEffect(() => {
    fetchPayments();   
    //fechData();
    //getAllData();

  }, []);
/////////////////////////////
  const copyPaymentID = (paymentID) => {
    try{
      if(typeof paymentID == 'string'|| typeof paymentID === 'number' ) {
            const paymentIDString = String(paymentID);
    Clipboard.setStringAsync(paymentIDString);
    setVisibleMenu(false);
      } else {
        console.error("Invalid payment ID:", paymentID);
      }
    } catch (error){
      console.error("Error setting clipboard content:", error);
      
    }
    

  };

  const fetchCopiedText = async () => {
    try{
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
    } catch (error) {
    console.error("Error getting clipboard content:", error);
    // Maneja el error de la forma que sea apropiada para tu aplicación
  }
  };

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, payments.length);

  const columns = [
    {
      header: "ID",
      accessorKey: 'id'
    },
    {
      header: "Status",
      accessorKey: 'status'
    },
    {
      header: "Email",
      accessorKey: 'email'
    },
    {
      header: "Amount",
      accessorKey: 'amount'
    }
  ];

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
  };

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
        />
        <DataTable>
          <DataTable.Header>
            {columns.map((column) => (
              <DataTable.Title key={column.accessorKey}>{column.header}</DataTable.Title>
            ))}
            <DataTable.Title>Actions</DataTable.Title>
          </DataTable.Header>

          {payments.slice(from, to).map((payment, index) => (
            <DataTable.Row key={index}>
              {columns.map((column) => (
                <DataTable.Cell key={column.accessorKey}>{payment[column.accessorKey]}</DataTable.Cell>
              ))}
              <DataTable.Cell>
                <Button onPress={() => { setSelectedItem(payment); setVisibleMenu(true); }}>
                  <MaterialIcons name="menu" size={24} color="black" />
                </Button>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>

        <View
        style={{
          paddingTop: 70,
         position: 'absolute',
          top: 70,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',  // Agrega esta línea para centrar verticalmente
        }}>
        <Menu
          visible={visibleMenu}
          onDismiss={() => setVisibleMenu(false)}
          anchor={
               <Button onPress={() => { setSelectedItem()} }>
        <MaterialIcons name="menu" size={24} color="black" />
      </Button>
             }
        >
          <Menu.Item onPress={() => copyPaymentID(selectedItem?.id)} title="Copy payment ID" />
          <Divider />
          <Menu.Item onPress={() => copyPaymentID(selectedItem?.email)} title="View customer" />
          <Menu.Item onPress={() => copyPaymentID(selectedItem?.amount)} title="View payment details" />
        </Menu>
         </View>
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(payments.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${payments.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={'Rows per page'}
        />

        <TouchableOpacity onPress={fetchCopiedText}>
          <Text>View copied text</Text>
        </TouchableOpacity>
        <Text style={styles.copiedText}>{copiedText}</Text>
        <Text style={{fontSize: 25}}>{userInfo?.id}</Text>
      </SafeAreaView>

    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copiedText: {
    marginTop: 10,
    color: 'red',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    width: '100%',
    backgroundColor: 'green',
  },
  mainMenuAnchor: {
    width: 24,
    height: 5,
    backgroundColor: 'red',
  },
  menuWrapper: {
    alignSelf: 'flex-end',
    margin: 8,
  }
});

export default PagosTable;

