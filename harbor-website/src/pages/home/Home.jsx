import AdvantagesSection from './components/AdvantagesSection'
import FirstSection from './components/FirstSection'

export default function HomePage() {
    return (
        <div className='flex flex-col'>
            <FirstSection />
            <AdvantagesSection />
        </div>
    )
}
