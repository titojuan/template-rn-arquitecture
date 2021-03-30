import React, {useEffect}  from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../routes'
import { Container, Header, Content, Text, Body, Title, List, ListItem } from 'native-base'
import API from '@services/api'
import { useAppDispatch, useUserSelector } from '@hooks'
import * as userSlide from '@redux/slices/user'

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const userReducer: any = useUserSelector();

  useEffect(() => {
    dispatch(userSlide.getUsersStart());

    API.get(`/users`, {
      params: { per_page: 5 }
    })
      .then((response: any) => dispatch(userSlide.getUsersSuccess(response)))
      .catch((error: any) => dispatch(userSlide.getUsersFail(error)))
  }, [])

  const onPressItem = (row: any) => {
    navigation.navigate('PersonScreen')
    dispatch(userSlide.getUserStart());

    API.get(`/user/${row.login}`, {
      params: { username: row.login }
    })
      .then((response: any) => dispatch(userSlide.getUserSuccess(response)))
      .catch((error: any) => dispatch(userSlide.getUserFail(error)))
  }

  return (
    <Container>
        <Header>
          <Body>
            <Title>List USER Github</Title>
          </Body>
        </Header>
        <Content>
          <List>
            {(userReducer.list.response || []).map((row: any) => <ListItem onPress={() => onPressItem(row)}><Text>{row.login}</Text></ListItem>)}
          </List>
        </Content>
      </Container>
  ) 
};

export default HomeScreen;
