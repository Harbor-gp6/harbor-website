import AdvantagesSection from './components/AdvantagesSection'
import { ClientCall } from './components/ClientCall'
import { CommentSection } from './components/CommentSection'
import FirstSection from './components/FirstSection'

export default function HomePage() {
    return (
        <div className='flex flex-col'>
            <FirstSection />
            <AdvantagesSection />
            <CommentSection />
            <ClientCall />
        </div>
    )
}
