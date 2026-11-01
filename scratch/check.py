import json
import os

companies = [
  { "id": 'google', "name": 'Google', "color": '#4285f4', "logo": '🔍' },
  { "id": 'meta', "name": 'Meta', "color": '#0668E1', "logo": '🌐' },
  { "id": 'amazon', "name": 'Amazon', "color": '#ff9900', "logo": '📦' },
  { "id": 'apple', "name": 'Apple', "color": '#a3aaae', "logo": '🍎' },
  { "id": 'microsoft', "name": 'Microsoft', "color": '#00a4ef', "logo": 'Ⓜ️' },
  { "id": 'netflix', "name": 'Netflix', "color": '#e50914', "logo": '🎬' },
]

roles = [
  { "id": 'swe', "name": 'Software Engineer', "icon": '💻', "shortName": 'SWE' },
  { "id": 'pm', "name": 'Product Manager', "icon": '📊', "shortName": 'PM' },
  { "id": 'aiml', "name": 'AI/ML Engineer', "icon": '🤖', "shortName": 'AI/ML' },
  { "id": 'sre', "name": 'Site Reliability Engineer', "icon": '🔧', "shortName": 'SRE' },
  { "id": 'design', "name": 'System Design Architect', "icon": '🏗️', "shortName": 'Architect' },
  { "id": 'data', "name": 'Data Scientist', "icon": '📈', "shortName": 'Data' },
  { "id": 'frontend', "name": 'Frontend & UI Engineer', "icon": '🎨', "shortName": 'Frontend' },
  { "id": 'mobile', "name": 'Mobile Engineer (iOS/Android)', "icon": '📱', "shortName": 'Mobile' },
  { "id": 'security', "name": 'Security & AppSec Engineer', "icon": '🛡️', "shortName": 'Security' },
  { "id": 'devops', "name": 'Cloud & DevOps Engineer', "icon": '☁️', "shortName": 'DevOps' },
  { "id": 'sdet', "name": 'SDET & Automation Engineer', "icon": '🧪', "shortName": 'SDET' },
  { "id": 'tpm', "name": 'Technical Program Manager', "icon": '📋', "shortName": 'TPM' },
]

print(f"Roles defined: {len(roles)}, Companies: {len(companies)}")
