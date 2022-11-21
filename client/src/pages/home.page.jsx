import React from 'react';
import Layout from '../components/layout/layout.component';
import GameSelection from '../components/game-selection/game-selection.component';

class HomePage extends React.Component{
  render(){
    return <Layout>
      <GameSelection/>
    </Layout>
  }
}

export default HomePage;