import StatusLabel, {Status} from '@/app/components/status-label';
import AddCompanyButton from "@/app/components/add-company-button";

export default function Home() {
    return (
        <main>
            <h1 className="text-3xl">Home page</h1>
          <AddCompanyButton/>
        </main>
    );
}