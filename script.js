function enviarWhatsApp(servicio) {
  // Tu número telefónico a 10 dígitos
  const telefono = "5215560760561"; 
  
  // Mensaje personalizado para el servicio seleccionado
  const mensaje = `Hola, vi tu página web y estoy interesado en una cotización para un trabajo de *${servicio}*. ¿Tienes disponibilidad?`;
  
  // Enlace universal de la API oficial de WhatsApp
  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
  
  // Redirección directa en la misma pestaña (evita el bloqueo de ventanas emergentes en navegadores Web)
  window.location.href = url;
}