import React from 'react';

import { useRoute } from '@react-navigation/native';
import { Container, Title } from './style';
import { WebView } from 'react-native-webview';

export default function TechDetails() {
  const route = useRoute();
  const { tech } = route.params;
  return (
    <Container>
      <Title>{tech.id}</Title>
      <WebView
        style={{ flex: 1 }}
        source={{ url: `https://www.google.com/search?${tech.id}` }}
      />
    </Container>
  );
}
