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