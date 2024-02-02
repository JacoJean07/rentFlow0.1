import React from 'react';
import { View, Text, Avatar, Title, Subheading, Paragraph } from 'react-native-paper';

const UserProfileSection = ({ user }) => {
  return (
    <View style={{ alignItems: 'center', marginVertical: 20 }}>
      <Avatar.Image size={80} source={{ uri: user.photoUrl }} />
      <Title>{user.name}</Title>
      <Subheading>{user.email}</Subheading>
      <Paragraph>{user.phoneNumber}</Paragraph>
    </View>
  );
};

export default UserProfileSection;

