import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const Dropdow= (setValue) => {
  return (
<RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: '+593 (Ecuador)', value: '+593' },
                { label: '+51 (Perú)', value: '+51' },
                { label: '+57 (Colombia)', value: '+57' },
            ]}
        />
    );
};

export default Dropdow;
