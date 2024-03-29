from __future__ import print_function
from heapq import *


def find_k_largest_pairs(nums1, nums2, k):
    min_heap = []
    for i in range(0, min(k, len(nums1))):
        for j in range(min(k, len(nums2))):
            if len(min_heap) < k:
                heappush(min_heap, (nums1[i] + nums2[j], i, j))
            else:
                if nums1[i] + nums2[j] < min_heap[0][0]:
                    break
                else:
                    heappop(min_heap)
                    heappush(min_heap, (nums1[i] + nums2[j], i, j))

    result = []
    for (num, i, j) in min_heap:
        result.append([nums1[i], nums2[j]])

    return result


if __name__ == "__main__":
    print("Pairs with largest sum are: " + str(find_k_largest_pairs([9, 8, 2], [6, 3, 1], 3)))
