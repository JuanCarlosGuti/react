
import PropTypes from 'prop-types'


export const FirstApp =({title, subTitle}) => {
    if(!title){
        throw new Error('El title no existe');
    }
   

 
    return  (<>
                <h2>{title}</h2>
                <h3>{subTitle+2}</h3>
                <p>Subtitulo</p>
            </>);
    
   }

   FirstApp.propTypes = {
    title: PropTypes.string.isRequired

   }



   