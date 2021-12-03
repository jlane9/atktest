import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <table>
          <th>
            <td>name</td>
            <td>value</td>
          </th>
          <tr>
            <td>
              REACT_APP_TESTVALUE
            </td>
            <td>
              {process.env.REACT_APP_TESTVALUE}
            </td>
          </tr>
          <tr>
            <td>
              REACT_APP_MIXPANEL_TOKEN
            </td>
            <td>
              {process.env.REACT_APP_MIXPANEL_TOKEN}
            </td>
          </tr>
        </table>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
