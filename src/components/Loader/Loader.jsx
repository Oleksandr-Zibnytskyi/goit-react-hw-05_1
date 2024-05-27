import { Blocks } from 'react-loader-spinner'
import css from './Loader.module.css'

export default function Loader({loading}) {
    return (
       <div className={css.loader}>
<Blocks
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="blocks-loading"
  loading={loading}
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  visible={true}
  />
  <p>Loading data, please wait...</p>
  </div>
    );
}