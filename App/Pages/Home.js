/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { Images, Colors } from '../Themes'
import APIRequest from '../Config/APIRequest'

import News from '../Components/News'
import Search from '../Components/Search'
import Logo from '../Components/Logo'
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

export default function App(props){
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchText] = useState("");
  const [category] = useState("");

  const loadArticles = async (searchTerm = '', category = '') => {
    // this.setState({articles:[], loading: true});
    setLoading(true);
    setArticles([]);
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    setLoading(false);
    setArticles(resultArticles);
    // this.setState({loading: false, articles: resultArticles})
  }

  useEffect(() => {loadArticles()}, []);

  contentDisplayed = null;

  if (loading) {
    contentDisplayed = (
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large" color="black"/>
    )
  } else {
    contentDisplayed = <News articles={articles} navigation={props.navigation}/>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search getQuery={loadArticles}/>
      <View style={{flex:7}}>
        {contentDisplayed}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
