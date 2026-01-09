## Email Chain Count

### The Challenge

Analyse email subject lines to count how many times an email has been forwarded or replied to by detecting specific markers (`re:`, `fwd:`, `fw:`) regardless of their case.

### Technical Strategy: Regular Expression (Regex) Matching

Instead of splitting the string or using complex loops, this solution leverages the power of **Regex** to find all occurences in a single pass.

    1.  **Pattern Grouping**: Used parenthesis `()` combined with the pipe `|` operator to create an "OR  condition for the three specific markers.

    2.  **Strategic Ordering**: Placed `fwd:` before `fw:` in the regex pattern to ensure the engine attempts to match the longest string first, preventing partial matches.

    3.  **Flag Usage**:

        - `g` (Global): To find every occurence, not just the first one.

        - `i` (Case-insensitive): To catch variations like "RE:", "Re:" or "re:".

    4. **Null Safety**: Used the **Logical OR (||) operator to provide an empty array fallback. This prevents the code from breaking when `.length` is called on a subject line with no markers.

    ### Key Code Snippet

    ```Javascript

    function emailChainCount(subject) {
        // Define the pattern with alternation
        const regex = /(re:|fwd:|fw:)/gi

        // Use ||[] to handle the null return case safely
        const matches = subject.match(regex) || [];

        return matches.length;
    }

    ```

    ### Lessons Learned

        - **The Difference Between `[]` and `()` in Regex**: Learned that `[abc]` matches any single character, while `(abc|def)` matches entire sequences of characters.

        - **Handling Null Returns**: Understood that some JavaScript string methods return `null` instead of an empty structure, requiring a safety check or fallback.

        - **Efficiency in Search**: Realised that a single regex pass is more preformant than multiple `.includes()` checks or complex string splits.
