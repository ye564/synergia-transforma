# EmailJS Integration - Synergia Integral

## 📧 Configuración de Variables de Entorno

### 1. Crear archivo `.env` en la raíz del proyecto

Crea un archivo `.env` en la raíz (al mismo nivel que `package.json`) con las siguientes variables:

```env
VITE_EMAILJS_SERVICE_ID=service_b8d9ccs
VITE_EMAILJS_TEMPLATE_ID=template_dig3ls7
VITE_EMAILJS_PUBLIC_KEY=c1G0zfnPO9uUXhDTZ
```

### 2. Variables del Template en EmailJS

Asegúrate de que tu template en EmailJS tenga las siguientes variables configuradas:

- `{{from_name}}` - Nombre del usuario
- `{{from_email}}` - Email del usuario
- `{{message}}` - Mensaje del usuario
- `{{telefono}}` - Teléfono (solo en formulario de contacto)

## 🧪 Cómo Probar

### En Desarrollo (`npm run dev`)

1. Crea el archivo `.env` con las credenciales
2. Ejecuta `npm run dev`
3. Navega a `/contacto` o `/admisiones`
4. Completa y envía el formulario
5. Verifica que el email llegue a tu bandeja de entrada configurada en EmailJS

### En Build (`npm run build`)

1. Asegúrate de que el archivo `.env` existe
2. Ejecuta `npm run build`
3. Ejecuta `npm run preview`
4. Prueba los formularios igual que en desarrollo

**Nota:** Vite carga automáticamente las variables de entorno que empiezan con `VITE_` en tiempo de build.

## 🛡️ Seguridad - Honeypot

Los formularios incluyen un campo oculto `website` como honeypot:
- Si un bot llena este campo, el envío se cancela silenciosamente
- Los usuarios humanos no verán ni llenarán este campo

## 📝 Formularios Integrados

1. **Página de Contacto** (`/contacto`)
   - Campos: nombre, email, teléfono, mensaje
   - Validación con Zod

2. **Página de Admisiones** (`/admisiones`)
   - Campos: nombre, email, teléfono, mensaje + necesidades
   - Validación con Zod

## ✅ Confirmación de Funcionamiento

Si la integración funciona correctamente:
- ✅ Los formularios muestran estado "Enviando..."
- ✅ Al completarse, aparece toast de éxito
- ✅ El formulario se limpia automáticamente
- ✅ Recibes el email en tu bandeja de EmailJS
- ✅ Los bots son bloqueados por el honeypot

## 🔧 Troubleshooting

### "Email no se envía"
- Verifica que el archivo `.env` existe y tiene las credenciales correctas
- Revisa la consola del navegador para errores
- Confirma que las credenciales en EmailJS están activas

### "Variables undefined en el template"
- Asegúrate de que los nombres de variables en EmailJS coinciden:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{message}}`

### "Error 401 o 403"
- Verifica que la `VITE_EMAILJS_PUBLIC_KEY` sea correcta
- Confirma que el servicio esté activo en tu cuenta EmailJS
