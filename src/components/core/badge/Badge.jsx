import React, { useEffect,useState } from 'react'
import PropTypes from 'prop-types'

const Badge = ({ variant, type, className, children }) => {

  const [colorDefault, setColorDefault] = useState('');
  const [typeDefault, setTypeDefault] = useState('');

  const getColor = (color) => {
    const colorBg = {
      secondary: 'bg-gray-600 text-white',
      success: 'bg-green-500 text-white',
      danger: 'bg-red-500 text-white',
      warning: 'bg-yellow-500 text-white',
      info: 'bg-blue-400 text-white',
      light: 'bg-gray-200 text-gray-700',
      dark: 'bg-gray-800 text-gray-700',
      primary: 'bg-blue-600 text-white',
    };
    const defaultColor = 'bg-blue-600 text-white';
    return colorBg[color] || defaultColor;
  }

  useEffect(() => {
    setColorDefault(getColor(variant))
  }, [variant])

  const getType = (type) => {
    const typeB = {
      pills: 'rounded-full',
      default: 'rounded',
    };
    const defaultColor = 'rounded';
    return typeB[type] || defaultColor;
  }

  useEffect(() => {
    setTypeDefault(getType(type))
  }, [type])

  const style = {
    default: `text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold`,
    color: `${colorDefault}`,
    type: `${typeDefault}`
  };

  return (
    <span className={`${style.default} ${style.color} ${style.type} ${className ?? ''}`}>
      {children}
    </span>
  )
}

Badge.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
}
Badge.defaultProps = {
  variant: "primary",
  type: "default", //pills
}

export default Badge