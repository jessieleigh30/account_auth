import React from 'react';

//set up the initial Context

const AccountContext = React.createContext();

//create an exportable consumer that can be injected into components

export const AccountConsumer = AccountContext.Consumer;

//create the Provider using traditional React.Component class

class AccountProvider extends React.Component {
  state = {
    username: 'Fooman77',
    dateJoined: '12/18/18',
    membershipLevel: 'Silver',

  }

  updateAccount = (account) => {
    this.setState({...account,});
  }

  render(){
    return(
      <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    )
  }
}  

export default AccountProvider;