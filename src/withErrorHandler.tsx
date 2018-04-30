import * as React from 'react'
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import { AxiosInstance } from 'axios'

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
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ open: false })
        return req
      })
      this.resInterceptor = axios.interceptors.response.use(
        res => res,
        err => {
          this.setState({ open: true, error: err.message })
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
    public render() {
      return (
        <>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle>Something went wrong!</DialogTitle>
            <DialogContent>
              <DialogContentText>{this.state.error}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
          <InnerComponent {...this.props} />
        </>
      )
    }
  }
}

export default withErrorHandler
