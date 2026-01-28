# Zettelkasten Templates (Consolidated)

**Version**: 1.0.0 | **Device**: {{device}} | **Date**: {{date: YYYY-MM-DD}}

---

## 🎯 Template Selection

**Select your note type:**
{{select: note-type: fleeting | literature | permanent | daily-journal-enhanced | daily-journal-mobile}}

---

{{if: {{select: note-type: fleeting | literature | permanent | daily-journal-enhanced | daily-journal-mobile}} == "fleeting"}}
# 🚀 Fleeting Note Template

**Quick capture of thoughts and ideas**

---

# {{input: title: Quick Thought}} ({{zettel-id}})

id:: {{zettel-id}}
type:: fleeting
created:: {{date: YYYY-MM-DD}}T{{time: HHmm}}00.000Z
context:: {{select: context: quick-capture | reading | meeting | walking | research | idea | project | personal}}
status:: draft
tags:: #zettel #fleeting {{if: {{device}} == "mobile"}}#mobile-capture{{endif}}
device:: {{device}}

**Captured**: {{date: YYYY-MM-DD}} {{time: HHmm}}
**Priority**: {{select: priority: low | medium | high}}
**Project**: {{input: project: Optional project name}}

## Thought
{{input: content: Enter your quick thought here}}

## To Process Later
- [ ] Expand into permanent note
- [ ] Find connections
- [ ] Add context
- [ ] Review by: {{date: +3d}}

{{if: {{select: include-advanced: yes | no}} == "yes"}}
## Advanced
**Energy Level**: {{select: energy: low | medium | high}}
**Location**: {{input: location: Where are you?}}
**Mood**: {{input: mood: How are you feeling?}}
{{endif}}

{{if: {{device}} == "desktop"}}
## Desktop-Only Sections
**Review Notes**: 
**Connections**: 
- Related to: [[ ]]
- Inspired by: [[ ]]
{{endif}}

---

**Template**: Fleeting Note | **ID**: {{zettel-id}} | **Status**: Draft
{{endif}}

---

{{if: {{select: note-type: fleeting | literature | permanent | daily-journal-enhanced | daily-journal-mobile}} == "literature"}}
# 📚 Literature Note Template

**Capture insights from reading and learning**

---

# {{input: title: Source Title}} ({{zettel-id}})

id:: {{zettel-id}}
type:: literature
created:: {{date: YYYY-MM-DD}}T{{time: HHmm}}00.000Z
context:: {{select: context: quick-capture | reading | meeting | walking | research | idea | project | personal}}
status:: draft
tags:: #zettel #literature {{if: {{device}} == "mobile"}}#mobile-capture{{endif}}
device:: {{device}}

**Source**: {{input: source-title: Book/Article Title}}
**Author**: {{input: author: Author Name}}
**Read**: {{date: YYYY-MM-DD}}
**Source Type**: {{select: source-type: book | article | paper | blog | video | podcast | other}}
**Rating**: {{select: rating: ⭐☆☆☆☆ | ⭐⭐☆☆☆ | ⭐⭐⭐☆☆ | ⭐⭐⭐⭐☆ | ⭐⭐⭐⭐⭐}}

## Summary
{{input: summary: Brief summary of the source}}

## Key Points
{{input: key-points: Main points or arguments}}

{{if: {{select: include-quotes: yes | no}} == "yes"}}
## Quotes
{{input: quotes: Key quotes or passages}}
{{endif}}

{{if: {{select: include-thoughts: yes | no}} == "yes"}}
## My Thoughts
{{input: thoughts: Your reflections and connections}}
{{endif}}

{{if: {{device}} == "desktop"}}
## References
{{input: references: Citation details or links}}

## Connections
- Builds on: [[ ]]
- Contrasts with: [[ ]]
- Related to: [[ ]]

## Action Items
- [ ] Follow up on references
- [ ] Share with colleagues
- [ ] Apply to current projects
{{endif}}

---

**Template**: Literature Note | **ID**: {{zettel-id}} | **Rating**: {{select: rating: ⭐☆☆☆☆ | ⭐⭐☆☆☆ | ⭐⭐⭐☆☆ | ⭐⭐⭐⭐☆ | ⭐⭐⭐⭐⭐}}
{{endif}}

---

{{if: {{select: note-type: fleeting | literature | permanent | daily-journal-enhanced | daily-journal-mobile}} == "permanent"}}
# 🏛️ Permanent Note Template

**Developed ideas and synthesized concepts**

---

# {{input: title: Concept Name}} ({{zettel-id}})

id:: {{zettel-id}}
type:: permanent
created:: {{date: YYYY-MM-DD}}T{{time: HHmm}}00.000Z
context:: {{select: context: quick-capture | reading | meeting | walking | research | idea | project | personal}}
status:: {{select: status: draft | in-progress | complete | archived}}
tags:: #zettel #permanent {{if: {{device}} == "mobile"}}#mobile-capture{{endif}}
device:: {{device}}

**Concept**: {{input: concept: Core concept or idea}}
**Importance**: {{select: importance: low | medium | high | critical}}
**Confidence**: {{select: confidence: low | medium | high | certain}}

## Core Idea
{{input: claim: Your main claim or argument}}

## Supporting Points
{{input: evidence: Evidence and reasoning}}

{{if: {{select: include-implications: yes | no}} == "yes"}}
## Implications
{{input: implications: Consequences and applications}}
{{endif}}

{{if: {{device}} == "desktop"}}
## Connections
- Builds on: {{input: builds-on: Related notes}}
- Contrasts with: {{input: contrasts-with: Opposing views}}
- Related to: {{input: related-to: Other related concepts}}

## Questions
{{input: questions: Unanswered questions or areas for exploration}}

## Development History
- Created: {{date: YYYY-MM-DD}}
- Last reviewed: {{date: YYYY-MM-DD}}
- Next review: {{date: +30d}}

## References
{{input: references: Supporting sources and citations}}
{{endif}}

---

**Template**: Permanent Note | **ID**: {{zettel-id}} | **Importance**: {{select: importance: low | medium | high | critical}} | **Confidence**: {{select: confidence: low | medium | high | certain}}
{{endif}}

---

{{if: {{select: note-type: fleeting | literature | permanent | daily-journal-enhanced | daily-journal-mobile}} == "daily-journal-enhanced"}}
# 📅 Enhanced Daily Journal Template

**Comprehensive daily journal with tracking and reflection**

---

# {{date: YYYY-MM-DD}}

**Day**: {{date: dddd}}  
**Week**: {{date: w}}  
**Capture Device**: {{device}}  
**Journal Type**: {{select: journal-type: standard | focused | reflective | planning}}

---

## 🎯 Daily Focus {{renderer :collapse, daily-focus}}
{{input: daily-focus: What's your main focus for today?}}

**Priority Level**: {{select: focus-priority: low | medium | high | critical}}

**Success Metrics**:
- [ ] {{input: metric-1: First success metric}}
- [ ] {{input: metric-2: Second success metric}}
- [ ] {{input: metric-3: Third success metric}}

---

## 📝 Manual Zettel Links
- [[ ]]
- [[ ]]
- [[ ]]

*Tip: Use `[[` to link to existing zettels or create new ones*

---

## 🔍 Auto-Listed Zettels {{renderer :collapse, query-zettels}}

### Today's Zettels
{{query (and (property type [[fleeting/literature/permanent]]) (page-property created {{date: YYYY-MM-DD}}))}}

### Zettel Statistics {{renderer :collapse, zettel-stats}}
**Total Today**: {{query (and (property type [[fleeting/literature/permanent]]) (page-property created {{date: YYYY-MM-DD}})) | count}}  
**By Type**: 
- Fleeting: {{query (and (property type fleeting) (page-property created {{date: YYYY-MM-DD}})) | count}}
- Literature: {{query (and (property type literature) (page-property created {{date: YYYY-MM-DD}})) | count}}
- Permanent: {{query (and (property type permanent) (page-property created {{date: YYYY-MM-DD}})) | count}}

**By Context** (if available):
{{query (and (property type [[fleeting/literature/permanent]]) (page-property created {{date: YYYY-MM-DD}})) 
| group-by (property context)
| table (count) context
}}

---

## ✅ Tasks {{renderer :collapse, daily-tasks}}

### Priority Tasks
- [ ] {{input: priority-task-1: Most important task}} {{select: priority-1: 🔴 High | 🟡 Medium | 🟢 Low}}
- [ ] {{input: priority-task-2: Second important task}} {{select: priority-2: 🔴 High | 🟡 Medium | 🟢 Low}}
- [ ] {{input: priority-task-3: Third important task}} {{select: priority-3: 🔴 High | 🟡 Medium | 🟢 Low}}

### Recurring Tasks
- [ ] Review yesterday's zettels
- [ ] Process #mobile-capture notes
- [ ] Update permanent notes
- [ ] Plan tomorrow's focus

### Additional Tasks
- [ ] 
- [ ] 
- [ ] 

---

## 📓 Notes & Ideas {{renderer :collapse, daily-notes}}

### Quick Capture Area
{{input: quick-note-1: First quick note or idea}}
{{input: quick-note-2: Second quick note or idea}}
{{input: quick-note-3: Third quick note or idea}}

### Meeting Notes
{{if: {{select: had-meetings: yes | no}} == "yes"}}
**Meetings Today**:
- **Meeting 1**: {{input: meeting-1: Meeting title}} with {{input: meeting-1-people: People}}
  - Key points: {{input: meeting-1-points: Key discussion points}}
  - Actions: {{input: meeting-1-actions: Action items}}

- **Meeting 2**: {{input: meeting-2: Meeting title}} with {{input: meeting-2-people: People}}
  - Key points: {{input: meeting-2-points: Key discussion points}}
  - Actions: {{input: meeting-2-actions: Action items}}
{{endif}}

### Reading Notes
{{if: {{select: did-reading: yes | no}} == "yes"}}
**Reading Today**:
- **Source**: {{input: reading-source: What did you read?}}
- **Key Insight**: {{input: reading-insight: Main takeaway}}
- **To Explore**: {{input: reading-to-explore: What to explore further}}
{{endif}}

---

## 🤔 Reflections {{renderer :collapse, daily-reflections}}

### What Went Well
{{input: went-well-1: First positive}}
{{input: went-well-2: Second positive}}
{{input: went-well-3: Third positive}}

### What Could Be Improved
{{input: improve-1: First improvement}}
{{input: improve-2: Second improvement}}
{{input: improve-3: Third improvement}}

### Learning Moments
{{input: learning-1: What did you learn today?}}
{{input: learning-2: What surprised you?}}
{{input: learning-3: What will you do differently?}}

### Energy & Mood Tracking
**Energy Level**: {{select: energy-level: 😴 Low | 😐 Medium | 😊 High | 🚀 Very High}}  
**Mood**: {{select: mood: 😞 Poor | 😐 Neutral | 🙂 Good | 😄 Great}}  
**Productivity**: {{select: productivity: Low | Medium | High | Very High}}

**Why?**: {{input: energy-mood-why: What affected your energy/mood?}}

---

## 🔗 Connections & Synthesis {{renderer :collapse, connections}}

### Today's Theme
{{input: daily-theme: What theme emerged today?}}

### Connections Between Notes
{{input: note-connections: How do today's notes connect to each other?}}

### Synthesis Opportunities
{{input: synthesis-opportunities: What could be synthesized from today's notes?}}

### Questions Raised
- {{input: question-1: First question}}
- {{input: question-2: Second question}}
- {{input: question-3: Third question}}

---

## 🎯 Tomorrow's Preview {{renderer :collapse, tomorrow-preview}}

### Carry Forward
- [ ] {{input: carry-1: First item to carry forward}}
- [ ] {{input: carry-2: Second item to carry forward}}
- [ ] {{input: carry-3: Third item to carry forward}}

### Tomorrow's Focus
{{input: tomorrow-focus: What will you focus on tomorrow?}}

### Preparation Needed
{{input: tomorrow-prep: What do you need to prepare for tomorrow?}}

---

## 📊 Daily Review {{renderer :collapse, daily-review}}

### Completion Rate
**Tasks Completed**: {{select: tasks-completed: 0-25% | 26-50% | 51-75% | 76-100%}}  
**Focus Achieved**: {{select: focus-achieved: Not at all | Somewhat | Mostly | Completely}}

### Zettelkasten Health
**New Notes Created**: {{query (and (property type [[fleeting/literature/permanent]]) (page-property created {{date: YYYY-MM-DD}})) | count}}  
**Notes Processed**: {{select: notes-processed: None | Some | Most | All}}  
**Connections Made**: {{select: connections-made: None | Few | Several | Many}}

### Overall Satisfaction
**Day Rating**: {{select: day-rating: ⭐ Poor | ⭐⭐ Okay | ⭐⭐⭐ Good | ⭐⭐⭐⭐ Very Good | ⭐⭐⭐⭐⭐ Excellent}}  
**Why?**: {{input: rating-why: Why this rating?}}

---

## 🏷️ Metadata & Organization

**Tags**: #daily-journal #{{date: YYYY-MM}} #{{date: YYYY}} {{if: {{device}} == "mobile"}}#mobile-journal{{endif}}  
**Journal Style**: {{select: journal-type: standard | focused | reflective | planning}}  
**Capture Method**: {{select: capture-method: typed | voice | mixed | other}}  
**Location**: {{input: location: Where are you?}}  
**Weather**: {{input: weather: What's the weather like?}}

**Related Projects**: {{input: related-projects: Projects this journal relates to}}  
**People Mentioned**: {{input: people-mentioned: People discussed today}}

---

**Template**: Enhanced Daily Journal | **Date**: {{date: YYYY-MM-DD}} | **Device**: {{device}}
{{endif}}

---

{{if: {{select: note-type: fleeting | literature | permanent | daily-journal-enhanced | daily-journal-mobile}} == "daily-journal-mobile"}}
# 📱 Mobile Daily Journal Template

**Mobile-optimized quick daily journal**

---

# {{date: YYYY-MM-DD}}

📱 **Mobile Journal** | {{date: dddd}} | {{time: HHmm}}

---

## 🎯 Quick Focus
{{input: focus: One main focus for today}}

**Priority**: {{select: priority: Low | Medium | High}}

---

## 📝 Zettels Today
{{query (and (property type [[fleeting/literature/permanent]]) (page-property created {{date: YYYY-MM-DD}}))}}

*Total: {{query (and (property type [[fleeting/literature/permanent]]) (page-property created {{date: YYYY-MM-DD}})) | count}}*

---

## ✅ Quick Tasks
- [ ] {{input: task1: Most important}}
- [ ] {{input: task2: Second important}}
- [ ] {{input: task3: Third important}}
- [ ] 
- [ ] 

---

## 💭 Quick Notes
{{input: note1: First quick note}}
{{input: note2: Second quick note}}
{{input: note3: Third quick note}}

---

## 🤔 Quick Reflection
**Went well**: {{input: went-well: One thing that went well}}
**Improve**: {{input: improve: One thing to improve}}
**Learned**: {{input: learned: One thing learned}}

**Energy**: {{select: energy: Low | Medium | High}}
**Mood**: {{select: mood: 😞 | 😐 | 🙂 | 😄}}

---

## 🏷️ Quick Tags
#daily #mobile #{{date: YYYY-MM}} {{if: {{select: include-context-tags: yes | no}} == "yes"}}#{{input: context-tag: context-tag}}{{endif}}

---

*Mobile-optimized journal template. Use voice input for faster capture. Sync to desktop for detailed processing.*

**Device**: {{device}} | **Time**: {{time: HHmm}} | **Version**: Mobile-1.0

---

**Template**: Mobile Daily Journal | **Date**: {{date: YYYY-MM-DD}} | **Priority**: {{select: priority: Low | Medium | High}}
{{endif}}

---

## 📋 Template Information

### Available Templates:
1. **🚀 Fleeting Note** - Quick thoughts and ideas
2. **📚 Literature Note** - Reading and learning insights  
3. **🏛️ Permanent Note** - Developed concepts and arguments
4. **📅 Enhanced Daily Journal** - Comprehensive daily tracking
5. **📱 Mobile Daily Journal** - Mobile-optimized quick journal

### Common Features:
- **Auto-generated IDs**: `{{zettel-id}}` creates `YYYY-MM-DD-HHMMSS` format
- **Device detection**: `{{device}}` shows mobile/desktop sections
- **Conditional logic**: Show/hide sections based on selections
- **Enhanced UI**: Labeled inputs and dropdowns
- **Query compatibility**: Works with existing journal queries

### Usage Notes:
- **Desktop**: Full Sequence functionality available
- **Mobile**: Static templates only (no plugin support)
- **Sync**: Use Syncthing for mobile-desktop workflow
- **Compatibility**: Maintains native template format

---

**Consolidated Zettelkasten Templates v1.0.0**  
**Generated**: {{date: YYYY-MM-DD HHmm}} | **Device**: {{device}}  
**Maintains backward compatibility with native templates**