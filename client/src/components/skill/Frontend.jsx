import React,{useEffect,useState} from 'react'
import { BASE_URL } from "../../hook";

const Frontend = () => {
    const [data,setData]= useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        fetch(`${BASE_URL}/api/v1/skill/`).then(res=>res.json()).then(data=>{
            const dataFontEnd = data.skills.filter(item=>{
                return item.role === 'FrontEnd'
            })
            setLoading(true)
            setData(dataFontEnd)
    })
    },[])
  return (
    <div className="skills__content">
        <h3 className="skills__title">
        Frontend Developer
        </h3>
        <div className="skills__box">
            <div className="skills__group">
    {
        loading && data.map(item=>{
            return (
                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">{item.name}</h3>
                    <span className="skills__level">{item.level}</span>
                </div>
                </div>
            )
        })
    }
              
                
            </div>

            {/* <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Frontend