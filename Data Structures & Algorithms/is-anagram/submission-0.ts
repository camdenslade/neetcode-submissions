class Solution {
    isAnagram(s: string, t: string): boolean {
        const sortedS = s.split("").sort((a,b) => a.localeCompare(b)).join()
        const sortedT = t.split("").sort((a,b) => a.localeCompare(b)).join()
        if (sortedS === sortedT) return true
        return false
    }
}
