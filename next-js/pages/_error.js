import React, { Component } from 'react'
import Background from '../components/Core/Background'
import Text from '../components/Core/Text'
import colors from '../config/colors'
import Card from '../components/Core/Card'

export default class _error extends Component {
  render() {
    return (
      <Background>

        <div className="container">
          <div className="row">
            <div className="col-12 my-4 text-center">
              <img src="/static/img/logo/MAWIN_LOGO_3.png" className="mx-auto d-block w-25" />
              <div className="d-inline-block">
                <Text color={'#fff'}>Mawin</Text>
                <Text color={colors.yellow}>bet</Text>
              </div>
              <Card className="d-block py-2">
                <Text color={colors.yellow} className="my-1">ไม่พบหน้าที่ค้นหา</Text><br />
                <a href="/" className="my-1">
                  <button className="btn btn-primary">
                    กลับหน้าหลัก
                  </button>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </Background>
    )
  }
}
