import React from 'react'
import { Layout, BackTop, Icon } from 'antd'
import NavLeft from './components/navLeft/index'
import MyHeader from './components/header/index'
// import MHeader from '@/components/mHeader'
import './styles/App.less'

const { Content, Sider } = Layout
class App extends React.Component {
  state = {
    navLeftShow: false
  }
  handleHideNavLeft = () => {
    this.setState({
      navLeftShow: false
    })
  }
  handleShowNavLeft=()=>{
    this.setState({
      navLeftShow: true
    })
  }
  render() {
    return (
      <Layout className="app-container">
        <Icon
          type="appstore"
          theme="twoTone"
          className="app-container-left-show-button"
          onClick={this.handleShowNavLeft}
          style={{
            fontSize: 30,
            position: 'absolute',
            right: '2.2rem',
            top: '2.2rem'
          }}
        />
        <Sider
          className={`app-container-left ${
            this.state.navLeftShow ? 'app-container-left-show' : 'app-container-left-hide'
          }`}
        >
          <NavLeft onHideNavLeft={this.handleHideNavLeft} />
        </Sider>
        <Layout className="app-container-right">
          {/* <div className="components-moblie-header">
            <MHeader />
          </div> */}
          <MyHeader />
          <Content className="app-container-right-content">
            {this.props.children}
            <BackTop>
              <div className="ant-back-top-inner">
                <Icon type="caret-up" theme="outlined" />
              </div>
            </BackTop>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default App
