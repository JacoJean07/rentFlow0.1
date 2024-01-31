import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
const Dropdown = ({ setCountryCode }) => {
  const countries = [
    { label: 'Ecuador', value: '+593' },
    { label: 'Perú', value: '+51' },
    { label: 'Colombia', value: '+57' },
  ];

  const formatPhoneNumber = (selectedItem, phoneNumber) => {
    // Verifica si el número de teléfono ya contiene el código del país
    if (phoneNumber.startsWith(selectedItem.value)) {
      return phoneNumber; // Si ya lo tiene, no lo modifiques
    }

    // Formatea el número de teléfono con el código del país
    return `${selectedItem.value}${phoneNumber}`;
  };

  return (
    <SelectDropdown
      data={countries}
      onSelect={(selectedItem, index) => {
        setCountryCode((phoneNumber) =>
          formatPhoneNumber(selectedItem, phoneNumber)
        );
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem.label;
      }}
      rowTextForSelection={(item, index) => {
        return item.label;
      }}
    />
  );
};

export default Dropdown;
