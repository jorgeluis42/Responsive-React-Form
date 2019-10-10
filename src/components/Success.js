import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';



export class Success extends Component {
    contiune = e => {
        e.preventDefault(); 
        // send your data to express here
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault(); 
        this.props.prevStep();
    }

    render() {
        return (
            
            <MuiThemeProvider>
              <React.Fragment>
                  <AppBar title="Success" />
            <h1>Thank you for your submission</h1>
            <p>You will get an email with futhur instructions, if you used this form for your final project please add me on your powerpoint slide with a thank you,
            thank you.</p>
                  
              </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
