/*
 * @file: Main.js
 * @description: Register Application with sentry and code push.
 * @date: 20.July.2018
 * @author: Lancy Goyal
 * */

import React, { Component } from 'react';
import CodePush from 'react-native-code-push';
// import { Sentry } from 'react-native-sentry';
import App from './src';

/**
 * Configuring sentry (crash analytics)
 */

// Sentry.config("https://62ddddf6d01c4b8f963e6b33c26b415d@sentry.io/1218653").install();

/**
 * Configured with a MANUAL check frequency for easy testing. For production apps, it is recommended to configure a
 * different check frequency, such as ON_APP_START, for a 'hands-off' approach where CodePush.sync() does not
 * need to be explicitly called. All options of CodePush.sync() are also available in this decorator.
 */

class Main extends Component {
  constructor() {
    super();
    this.state = {
      restartAllowed: false,
      progress: false,
      syncMessage: ''
    };
  }

  codePushStatusDidChange(syncStatus: number) {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        this.setState({ syncMessage: 'Checking for update.' });
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.setState({ syncMessage: 'Downloading package.' });
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        this.setState({ syncMessage: 'Awaiting user action.' });
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        this.setState({ syncMessage: 'Installing update.' });
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        this.setState({ syncMessage: 'App up to date.', progress: false });
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        this.setState({
          syncMessage: 'Update cancelled by user.',
          progress: false
        });
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        this.setState({
          syncMessage: 'Update installed and will be applied on restart.',
          progress: false
        });
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        this.setState({
          syncMessage: 'An unknown error occurred.',
          progress: false
        });
        break;
    }
  }

  codePushDownloadDidProgress(progress: boolean) {
    this.setState({ progress });
  }

  toggleAllowRestart() {
    this.state.restartAllowed ? CodePush.disallowRestart() : CodePush.allowRestart();

    this.setState({ restartAllowed: !this.state.restartAllowed });
  }

  // Update is downloaded silently, and applied on restart (recommended)
  sync() {
    CodePush.sync(
      {},
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    );
  }

  // Update pops a confirmation dialog, and then immediately reboots the app
  syncImmediate() {
    CodePush.sync(
      { installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: true },
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    );
  }

  componentWillMount() {
    if (process.env.NODE_ENV === 'production') {
      this.syncImmediate();
    } else {
      this.sync();
    }
  }

  render() {
    return <App />;
  }
}

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  installMode: CodePush.InstallMode.ON_NEXT_RESUME
};

export default CodePush(codePushOptions)(Main);
