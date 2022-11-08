import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

//image var
const image = {
  uri: 'https://www.stallionglobal.com/uploads/links/Title_68.jpg',
};

const Login = ({navigation}) => {
  //toHome
  const toHome = () => {
    navigation.navigate('Home');
  };

  //toSignup
  const toSignup = () => {
    navigation.navigate('Signup');
  };

  //return
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.bgView}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.backgroundimage}>
            <View style={styles.sectionview}>
              <Text style={styles.wb}>Welcome back</Text>
              <Text style={styles.ltya}>Login to your account</Text>
              <View style={styles.formView}>
                <TextInput
                  name="email"
                  focusable
                  placeholder="Email"
                  placeholderTextColor="lightgrey"
                  style={styles.inputfield}
                />
                <TextInput
                  name="password"
                  focusable
                  placeholder="Password"
                  placeholderTextColor="lightgrey"
                  style={styles.inputfield}
                />
                <TouchableOpacity style={styles.lbtn} onPress={toHome}>
                  <Text style={styles.lbtntxt}>Login</Text>
                </TouchableOpacity>
                <Text
                  style={{color: 'black', textAlign: 'center', paddingTop: 25}}>
                  Forgot your password?
                </Text>
                <Text
                  style={{
                    color: 'lightgrey',
                    textAlign: 'center',
                    paddingTop: 25,
                  }}>
                  Don't have an account?{' '}
                  <Text
                    style={{color: 'orange', fontWeight: 'bold'}}
                    onPress={toSignup}>
                    Sign up
                  </Text>
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  backgroundimage: {
    height: 300,
    width: 360,
    alignItems: 'center',
  },
  sectionview: {
    height: 455,
    width: 350,
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 225,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    alignItems: 'center',
  },
  wb: {
    color: 'black',
    fontSize: 23,
    fontFamily: 'sens-serif',
    paddingTop: 30,
    fontWeight: 'bold',
  },
  ltya: {
    color: 'grey',
    fontSize: 12,
    paddingTop: 15,
  },
  formView: {
    marginTop: 30,
    flex: 1,
  },
  inputfield: {
    width: 300,
    height: 40,
    borderColor: '#777',
    marginTop: 10,
    fontSize: 14,
    color: 'black',
    borderRadius: 30,
    paddingLeft: 15,
    backgroundColor: '#f5f5f5',
  },
  lbtn: {
    width: 300,
    height: 40,
    marginTop: 20,
    backgroundColor: 'orange',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lbtntxt: {
    color: 'white',
    fontWeight: 'bold',
  },
});
