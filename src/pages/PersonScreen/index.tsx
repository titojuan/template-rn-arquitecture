import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { Container, Header, Content, Body, Title, Spinner, Text, Left, Button, Icon } from 'native-base'
import { RootStackParamList } from '../../routes'
import { useUserSelector } from '@hooks'

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'PersonScreen'>;
}

const PersonScreen: React.FC<Props> = ({ navigation }) => {
  const userReducer: any = useUserSelector();

  const renderContent = userReducer.info.loading ? <Spinner /> : <Text>1</Text>

  return (
    <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Title>{'<'}</Title>
            </Button>
          </Left>
          <Body>
            <Title>User Github</Title>
          </Body>
        </Header>
        <Content>
          {renderContent}
        </Content>
      </Container>
  ) 
};

export default PersonScreen;