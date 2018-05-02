import * as React from 'react'
import { AxiosInstance } from 'axios'
import { notification } from 'antd'
import { IconType } from 'antd/lib/notification'

interface IwithErrorHandlerState {
  open: boolean
  error: any
}

function withErrorHandler<P>(InnerComponent: React.ComponentType<P>, axios: AxiosInstance) {
  return class extends React.Component<P, IwithErrorHandlerState> {
    public resInterceptor: number
    public reqInterceptor: number

    constructor(props: P) {
      super(props)
      this.state = { open: false, error: null }
      this.reqInterceptor = axios.interceptors.request.use(req => req)
      this.resInterceptor = axios.interceptors.response.use(
        res => res,
        err => {
          this.setState({ open: true, error: err.message })
          this.openNotificationWithIcon('error')
          return Promise.reject(err)
        }
      )
    }

    public componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.response.eject(this.resInterceptor)
    }

    public handleClose = () => {
      this.setState({ open: false })
    }

    public openNotificationWithIcon = (type: IconType) => {
      notification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      })
    }

    public render() {
      return <div />
    }
  }
}

export default withErrorHandler
