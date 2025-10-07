import { DataProvider } from 'src/Data/DataProvider';
import { Sections } from 'src/Sections/Sections';

export const App = () => {
    return (
        <DataProvider>
            <div className="m-0 p-0 min-h-full min-w-full bg-gray-100 text-gray-900 font-sans">
                <div className="max-w-3xl mx-auto bg-white h-full p-8 md:p-10 space-y-8 md:space-y-10">
                    <h1 className="text-3xl font-bold">CV App</h1>
                    <Sections />
                </div>
            </div>
        </DataProvider>
    );
};
