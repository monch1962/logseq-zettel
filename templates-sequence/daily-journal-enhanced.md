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

## 💡 Tips & Usage Notes

### Mobile Usage
- Use voice input for faster capture
- Take photos of physical notes
- Use quick capture workflow for zettels
- Sync regularly with desktop

### Desktop Usage
- Review and expand mobile captures
- Make connections between notes
- Update permanent notes
- Plan next steps

### Journal Maintenance
- Review weekly: Every Friday
- Review monthly: End of month
- Archive completed journals
- Extract insights for permanent notes

### Zettelkasten Integration
- All zettels auto-listed above
- Use manual links for specific connections
- Convert journal insights to permanent notes
- Track zettel statistics for productivity

---

*This enhanced journal template works with both native and Sequence zettel templates. The auto-listing query shows all zettels created today, regardless of template type.*

**Generated with Sequence-enhanced Zettelkasten Templates**  
**Version**: 1.0.0 | **Device**: {{device}} | **Date**: {{date: YYYY-MM-DD HHmm}}