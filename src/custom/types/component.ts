export type ComponentStyle = {
  rotate?: number
  opacity?: number
  width?: number
  height?: number
  top?: number
  left?: number
  fontSize?: string
  fontWeight?: number
  lineHeight?: string
  letterSpacing?: number
  textAlign?: string
  color?: string
  borderWidth?: number
  borderColor?: string
  borderRadius?: string
  borderStyle?: string
  backgroundColor?: string
  verticalAlign?: string
}

export type ComponentPropValue = {
  url?: any
  flip?: {
    horizontal: boolean
    vertical: boolean
  }
  data?: any
  stripe?: boolean
  thBold?: true
}

export type Component = {
  id?: string
  component: string
  label: string
  icon: any
  propValue?: string | ComponentPropValue
  style: ComponentStyle
  animations?: []
  events?: {}
}
