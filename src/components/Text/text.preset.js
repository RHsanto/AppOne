import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";


const BASE ={
  fontFamily:typography.primary,
  fontSize:16,
}

const BASE_BOLD ={
fontFamily:typography.primaryBold,
fontSize:16,

}

const BOLD ={
  fontFamily:typography.primaryBold,
  color:colors.purple
}


export const presets={
  default:BASE,
  bold:BOLD,
  h1:{
    ...BOLD,
    fontSize:30,
  },
  h2:{
    ...BOLD,
    fontSize:28,
  },
  h3:{
    ...BASE_BOLD,
    fontSize:24,
  },
  h4:{
    ...BASE_BOLD,
    fontSize:17,
  },
 small:{
  ...BASE,
  fontSize:12,
 }
}