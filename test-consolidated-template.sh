#!/bin/bash

# Test script for consolidated template validation

TEMPLATE_FILE="templates-sequence/zettelkasten-consolidated.md"

echo "Testing consolidated template: $TEMPLATE_FILE"
echo "=============================================="

# Check if file exists
if [ ! -f "$TEMPLATE_FILE" ]; then
    echo "❌ ERROR: Template file not found: $TEMPLATE_FILE"
    exit 1
fi

echo "✅ Template file exists"

# Check file size
FILE_SIZE=$(wc -l < "$TEMPLATE_FILE")
echo "📄 File size: $FILE_SIZE lines"

# Check for required sections
echo ""
echo "Checking for required template sections:"

# Check for template selection
if grep -q "{{select: note-type:" "$TEMPLATE_FILE"; then
    echo "✅ Template selection dropdown found"
else
    echo "❌ ERROR: Template selection dropdown not found"
fi

# Check for each template type
TEMPLATE_TYPES=("fleeting" "literature" "permanent" "daily-journal-enhanced" "daily-journal-mobile")

for type in "${TEMPLATE_TYPES[@]}"; do
    if grep -q "{{if: {{select: note-type:.*}} == \"$type\"}}" "$TEMPLATE_FILE"; then
        echo "✅ $type template section found"
    else
        echo "❌ ERROR: $type template section not found"
    fi
done

# Check for proper conditional closing
IF_COUNT=$(grep -o "{{if:" "$TEMPLATE_FILE" | wc -l)
ENDIF_COUNT=$(grep -o "{{endif}}" "$TEMPLATE_FILE" | wc -l)

echo ""
echo "Checking conditional logic:"
echo "  {{if: count: $IF_COUNT"
echo "  {{endif}} count: $ENDIF_COUNT"

if [ "$IF_COUNT" -eq "$ENDIF_COUNT" ]; then
    echo "✅ Conditional blocks properly balanced"
else
    echo "❌ ERROR: Conditional blocks unbalanced ({{if: $IF_COUNT vs {{endif}} $ENDIF_COUNT)"
fi

# Check for required variables
echo ""
echo "Checking for required variables:"

REQUIRED_VARS=("{{zettel-id}}" "{{device}}" "{{date:" "{{time:" "{{input:" "{{select:")

for var in "${REQUIRED_VARS[@]}"; do
    if grep -q "$var" "$TEMPLATE_FILE"; then
        echo "✅ Variable found: $var"
    else
        echo "⚠️  WARNING: Variable not found: $var"
    fi
done

# Check for template information section
echo ""
echo "Checking template documentation:"

if grep -q "## 📋 Template Information" "$TEMPLATE_FILE"; then
    echo "✅ Template information section found"
else
    echo "⚠️  WARNING: Template information section not found"
fi

# Check for backward compatibility note
if grep -q "Maintains backward compatibility" "$TEMPLATE_FILE"; then
    echo "✅ Backward compatibility note found"
else
    echo "⚠️  WARNING: Backward compatibility note not found"
fi

echo ""
echo "=============================================="
echo "Template validation complete"

# Summary
echo ""
echo "SUMMARY:"
echo "--------"
echo "Template file: $TEMPLATE_FILE"
echo "Total lines: $FILE_SIZE"
echo "Template types: ${#TEMPLATE_TYPES[@]}"
echo "Conditional blocks: $IF_COUNT (balanced: $([ "$IF_COUNT" -eq "$ENDIF_COUNT" ] && echo "yes" || echo "no"))"

if [ "$IF_COUNT" -eq "$ENDIF_COUNT" ] && [ "$FILE_SIZE" -gt 100 ]; then
    echo "✅ Template appears to be valid"
    exit 0
else
    echo "❌ Template validation failed"
    exit 1
fi