
import { createContext } from "react"; 

export const AboutContext = createContext();

function AboutContextProvider({children}){
    const about= {
        mame:"Salia Monica",
        hobbies: ["Singing", "Dancing", "Joking" ],
        bio:" I am the type who likes to exploy"
    }

      return(
          <AboutContext.Provider value={{about}}>
          {children}
          </AboutContext.Provider>
    
      )

}

export default AboutContextProvider