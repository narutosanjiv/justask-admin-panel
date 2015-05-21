import React from 'react';

export default class MainLayout extends React.Component{
  render() {
    return <div className='mui-app-canvas mui-predefined-layout-1'>
      <div className='mui-dark-theme mui-app-bar mui-paper mui-z-depth-0'>
          <div className='mui-paper-container mui-z-depth-bottom'>
            <h1 className='mui-app-bar-title'> Justask Admin Panel</h1>
          </div>
      </div>
    </div>
  }

}
