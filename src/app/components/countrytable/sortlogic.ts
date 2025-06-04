import { OlympicResult } from '../../constants/apptypes'

export type SortKey = 'gold' | 'silver' | 'bronze' | 'total' | undefined;
  

  export function sortOlympicResults(
    data: OlympicResult[],
    sortKey: SortKey = 'gold'
  ): OlympicResult[] {
    return [...data].sort((a, b) => {
      const totalA = a.gold + a.silver + a.bronze;
      const totalB = b.gold + b.silver + b.bronze;
  
      switch (sortKey) {
        case 'total':
          if (totalB !== totalA) return totalB - totalA;
          if (b.gold !== a.gold) return b.gold - a.gold;
          break;
        case 'gold':
          if (b.gold !== a.gold) return b.gold - a.gold;
          if (b.silver !== a.silver) return b.silver - a.silver;
          break;
        case 'silver':
          if (b.silver !== a.silver) return b.silver - a.silver;
          if (b.gold !== a.gold) return b.gold - a.gold;
          break;
        case 'bronze':
          if (b.bronze !== a.bronze) return b.bronze - a.bronze;
          if (b.gold !== a.gold) return b.gold - a.gold;
          break;
        default:
          if (b.gold !== a.gold) return b.gold - a.gold;
          if (b.silver !== a.silver) return b.silver - a.silver;
      }
  
      //  alphabetical by country code for undefined/ edge cases
      return a.code.localeCompare(b.code);
    });
  }