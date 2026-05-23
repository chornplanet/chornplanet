# Content Policy

This policy governs ChornPlanet media, outfit, civilization, commerce, news, entertainment, technology, and automated content workflows.

## Draft-first rule

All generated content is a draft until approved for publishing.

This includes:

- news digest posts
- entertainment posts
- technology posts
- outfit/clothing posts
- product posts
- image prompts
- video prompts
- captions
- marketplace descriptions
- TikTok scripts

## News / entertainment / technology content

Agents must:

- use reliable sources
- keep source tracking when factual claims are used
- avoid copying full articles
- summarize and transform into ChornPlanet editorial style
- separate factual reporting from opinion or creative interpretation
- clearly flag uncertainty

## DNA content

For outfit and civilization posts, agents must follow the DNA authority:

```text
StoryGenProduct: <attachments>
AutoScene: [...]
Mode: [Word/.../...]
SkipVideo: True or False
PostKeywords: []
```

Zone generation must resolve:

```text
Zone List -> Zone File -> exactly one Sub-Zone
```

## Commerce content

Commerce content should be attractive, premium, and conversion-aware, but must not misrepresent product availability, pricing, shipping, or marketplace status.

## Automation rule

Automated daily generation is allowed as a design goal.

Automated external publishing requires explicit approval and a safe publishing workflow.
