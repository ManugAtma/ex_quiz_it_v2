import decodeHTML from '@/pages/play/util/decodeHTML';

describe("decodeHTML", () => {

    test("returns text without HTML encoding", () => {

        const encoded = "During what war did the &quot;Cuban Missile Crisis&quot; occur?";
        const decoded = 'During what war did the "Cuban Missile Crisis" occur?';

        const result = decodeHTML(encoded);

        expect(result).toBe(decoded);
    });
})