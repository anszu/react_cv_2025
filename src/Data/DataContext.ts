import { createContext } from 'react';
import type { DataContextType } from 'src/Data/types/DataContextType';

export const DataContext = createContext<DataContextType | null>(null);
