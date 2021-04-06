import './App.css';
import Navbar from './navbar';
import Content from './content';
import ContentMob from './contentMob';
import { useMediaQuery } from 'react-responsive';
function App() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 769px)'
  })

  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' }
  )

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return (
    <div>

      {
        isDesktopOrLaptop &&
        <div>
          <Navbar />
          <Content />
        </div>
      }

      { isMobile &&
        <div>
          <ContentMob />
        </div>
      }

    </div>
  );
}

export default App;
