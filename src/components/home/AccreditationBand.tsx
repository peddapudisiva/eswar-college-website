import { ACCREDITATIONS } from '../../lib/constants';

export default function AccreditationBand() {
  return (
    <section className="bg-navy border-t-[3px] border-gold">
      <div className="container-site py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {ACCREDITATIONS.map((item) => (
            <div key={item.name} className="text-center">
              <div
                className="text-gold font-bold mb-1"
                style={{ fontSize: '28px' }}
              >
                {item.value}
              </div>
              <div
                className="text-white font-bold mb-1"
                style={{ fontSize: '14px' }}
              >
                {item.name}
              </div>
              <div className="text-white/45" style={{ fontSize: '11.5px', lineHeight: '1.4' }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
