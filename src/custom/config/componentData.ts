import { Component, ComponentStyle } from '../types/component'

export const commonComponentStyle: ComponentStyle = {
  rotate: 0,
  opacity: 0,
}

const componentList: Component[] = [
  {
    component: 'Text',
    label: '文字',
    propValue: '双击编辑文字',
    icon: iconMdiFormatText,
    style: {
      width: 200,
      height: 28,
      fontSize: '',
      fontWeight: 400,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: '',
      color: '',
    },
  },
  {
    component: 'Button',
    label: '按钮',
    propValue: '按钮',
    icon: iconMdiButtonCursor,
    style: {
      width: 100,
      height: 34,
      fontSize: '',
      lineHeight: '',
      letterSpacing: 0,
      color: '',
      borderWidth: 1,
      borderColor: '',
      borderRadius: '',
      backgroundColor: '',
    },
  },
  {
    component: 'Picture',
    label: '图片',
    icon: IconMdiPictureInPictureBottomRight,
    propValue: {
      url: '',
      flip: {
        horizontal: false,
        vertical: false,
      },
    },
    style: {
      width: 300,
      height: 200,
      borderRadius: '',
    },
  },
  {
    component: 'RectShape',
    label: '矩形',
    propValue: '&nbsp;',
    icon: IconMdiRectangle,
    style: {
      width: 200,
      height: 200,
      fontSize: '',
      fontWeight: 400,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: 'center',
      color: '',
      borderColor: '#000',
      borderWidth: 1,
      backgroundColor: '',
      borderStyle: 'solid',
      borderRadius: '',
      verticalAlign: 'middle',
    },
  },
  {
    component: 'LineShape',
    label: '直线',
    propValue: '',
    icon: IconMdiFormatLineWeight,
    style: {
      width: 200,
      height: 2,
      backgroundColor: '#000',
    },
  },
  {
    component: 'StarShape',
    label: '星形',
    icon: IconMdiStar,
    propValue: '',
    style: {
      width: 80,
      height: 80,
      fontSize: '',
      fontWeight: 400,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: 'center',
      color: '',
      borderColor: '#000',
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
  },
  {
    component: 'TriangleShape',
    label: '三角形',
    icon: IconMdiTriangle,
    propValue: '',
    style: {
      width: 80,
      height: 80,
      fontSize: '',
      fontWeight: 400,
      lineHeight: '',
      letterSpacing: 0,
      textAlign: 'center',
      color: '',
      borderColor: '#000',
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
  },

  {
    component: 'VTable',
    label: '表格',
    icon: iconMdiTable,
    propValue: {
      data: [
        ['表头1', '表头2', '表头3'],
        ['内容1', '内容2', '内容3'],
      ],
      stripe: true,
      thBold: true,
    },
    style: {
      width: 600,
      height: 200,
      fontSize: '',
      fontWeight: 400,
      textAlign: 'center',
      color: '',
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
  },
]

componentList.forEach(component => {
  component.style = { ...commonComponentStyle, ...component.style }
})

export default componentList
