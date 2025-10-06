import { useState, useEffect } from 'react'
import axios from 'axios'
import './About.css'

const About = props => {
  const [aboutData, setAboutData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {

    const fetchAboutData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/about')
        setAboutData(response.data.about)
        setLoading(false)

      } catch (err) {
        setError('Failed to load about information')
        setLoading(false)

        console.error('Error fetching aboutus data:', err)
      }
    }

    fetchAboutData()
  }, [])
  if (loading) {
    return (
      <div className="About-container">
        <div className="About-loading">Loading..</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="About-container">
        <div className="About-error">{error}</div>
      </div>
    )
  }

  return (
    <div className="About-container">
      <div className="About-content">
        <h1 className="About-title">{aboutData?.title}</h1>
        
        <div className="About-image-container">
          <img 
            src={aboutData?.imageUrl} 
            alt="Profile" 
            className="About-image"
          />
        </div>
        
        <div className="About-text">
          {aboutData?.paragraphs.map((paragraph, index) => (
            <p key={index} className="About-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

// make this component available to be imported into any other file
export default About
