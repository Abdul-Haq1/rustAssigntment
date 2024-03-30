function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';

    let prefix = strs[0]; // Start with the first string as the initial prefix

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            // Continue comparing characters until a mismatch is found or one of the strings ends
            j++;
        }
        // Update the prefix to the common prefix found so far
        prefix = prefix.substring(0, j);
        if (prefix === '') break; // If the prefix becomes empty, there's no common prefix
    }

    return prefix;
}
