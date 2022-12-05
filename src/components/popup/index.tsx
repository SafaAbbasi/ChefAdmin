import React  from 'react'
import { Modal } from 'antd';

type Props = {
  footer?: React.ReactNode
  title?: React.ReactNode
  className?: string
  bodyText?: string
  okText?: string
  open?: boolean
}

function popupComponent(props: Props) {

  return (
    <>
      <Modal
        className={props.className}
        okText={props.okText}
        footer={props.footer}
        title={props.title}
        open={props.open}
        centered
      >
        <p className='b2'>{props.bodyText}</p>
      </Modal>

    </>

  )
}

export default popupComponent