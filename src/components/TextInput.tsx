import classNames from 'classnames'
import Style from './TextInput.module.scss'

type Variant = 'default' | 'filled' | 'unstyle'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ITextInputProps {
  name?: string
  placeholder?: string
  label?: string
  description?: string
  error?: string
  variant?: Variant
  radius?: Size
  size?: Size
  disabled?: boolean
  withAsterik?: boolean
  icon?: React.ReactNode
  value?: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  values?: IInputValues[]
}

interface IStyleValue {
  [key: string]: number
}

const fontSizeValues: IStyleValue = {
  xs: 20,
  sm: 30,
  md: 40,
  lg: 50,
  xl: 60,
}

const radiusValues: IStyleValue = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
}

const TextInput = (props: ITextInputProps) => {
  const {
    name,
    placeholder,
    label,
    description,
    error,
    variant,
    radius,
    size,
    disabled,
    withAsterik,
    icon,
    value,
    type,
    onChange,
    required,
    values,
  } = props

  const inputWrapper = classNames({
    [Style.input_wrapper]: true,
    [Style.input_wrapper__error]: error,
    [Style.input_wrapper__filled]: variant === 'filled',
    [Style.input_wrapper__unstyle]: variant === 'unstyle',
  })

  const inputClass = classNames({
    [Style.input]: true,
    [Style.input__error]: error,
  })

  const fontSizeStyle = size
    ? {
        fontSize: fontSizeValues[size],
      }
    : {}
  const borderRadiusStyle = radius
    ? {
        borderRadius: radiusValues[radius],
      }
    : {}

  return (
    <div className={Style.wrapper} style={{ ...fontSizeStyle }}>
      <div className={Style.label}>
        {label} {withAsterik && <span style={{ color: 'red' }}>*</span>}
      </div>
      {type != 'radio' && <div className={Style.description}>{description}</div>}
      <div className={inputWrapper} style={{ ...borderRadiusStyle }}>
        {icon && <div className={Style.icon}>{icon}</div>}
        {type != 'radio' && (
          <input
            required={required}
            style={{ ...fontSizeStyle }}
            name={name}
            className={inputClass}
            type={type}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
          />
        )}
        {type == 'radio' && (
          <fieldset>
            <legend>{description}</legend>
            {values?.map((item) => (
              <div key={item.value}>
                <input
                  required={required}
                  style={{ ...fontSizeStyle }}
                  name={name}
                  className={inputClass}
                  type={type}
                  placeholder={placeholder}
                  value={item.value}
                  disabled={disabled}
                  onChange={onChange}
                  id={item.value}
                />
                <label htmlFor={item.value}>{item.label}</label>
              </div>
            ))}
          </fieldset>
        )}
      </div>
      <div className={Style.error}>{error}</div>
    </div>
  )
}

export default TextInput
