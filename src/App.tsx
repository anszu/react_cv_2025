import { DataProvider } from 'src/Data/DataProvider';
import { Sections } from 'src/Sections/Sections';

export const App = () => {
    return (
        <DataProvider>
            <div className="m-0 p-0 min-h-full min-w-full bg-gray-100 font-sans">
                <div className="max-w-3xl mx-auto bg-white h-full p-8 md:p-12">
                    <Sections />
                </div>
            </div>
        </DataProvider>
    );
};
