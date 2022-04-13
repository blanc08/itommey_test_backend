import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  bubbleSort(arr): string {
    // Optimized implementation of bubble sort Algorithm
    let i, j;
    const len = arr.length;

    let isSwapped = false;

    for (i = 0; i < len; i++) {
      isSwapped = false;

      for (j = 0; j < len; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          isSwapped = true;
        }
      }

      // IF no two elements were swapped by inner loop, then break

      if (!isSwapped) {
        break;
      }
    }

    return arr.join(', ');
  }
}
