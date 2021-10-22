import { handleSubmit } from './js/formHandler'
import { dataRender } from './js/dataRender'
import { dayCount } from './js/dayCount'


// import style sass file
import './styles/header.scss'
import './styles/body.scss'
import './styles/weather.scss'

// export js files for using from Client library which is set up in webpack config.
export {
  handleSubmit,
  dataRender,
  dayCount
 }
